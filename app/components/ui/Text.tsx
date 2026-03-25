import React from 'react';

type Variant = 'body' | 'heading1' | 'heading2' | 'heading3' | 'monoBody' | 'monoCode';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: React.ElementType;  // Permits polymorphic rendering
  weight?: number;         // Seamless Google Sans Flex variable weight mapping
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as,
  weight,
  className = '',
  style,
  children,
  ...props
}) => {
  // 1. Resolve standard tags polymorphism automatically
  let Component: React.ElementType = as || 'p';
  if (!as) {
    if (variant === 'heading1') Component = 'h1';
    else if (variant === 'heading2') Component = 'h2';
    else if (variant === 'heading3') Component = 'h3';
    else if (variant === 'monoCode') Component = 'code';
    else if (variant === 'monoBody') Component = 'p';
    else Component = 'p';
  }

  const isMono = variant.startsWith('mono');
  
  // 2. Map font family variable based on variant context
  const fontClass = isMono ? 'font-mono' : 'font-sans';
  
  // 3. Harness the variable nature of Google Sans Flex via font variation tags
  const customStyles: React.CSSProperties = { ...style };
  
  if (weight) {
    customStyles.fontWeight = weight;
    // Exploit true variable axes for Google Sans Flex
    customStyles.fontVariationSettings = `"wght" ${weight}`;
  }

  // 4. Default baseline utility styles
  let variantClasses = '';
  switch (variant) {
    case 'heading1':
      variantClasses = 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none';
      break;
    case 'heading2':
      variantClasses = 'text-3xl md:text-5xl font-extrabold tracking-tight';
      break;
    case 'heading3':
      variantClasses = 'text-2xl md:text-3xl font-bold tracking-tight';
      break;
    case 'monoCode':
      variantClasses = 'bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-md text-sm';
      break;
    case 'monoBody':
      variantClasses = 'text-sm md:text-base leading-relaxed tracking-wider';
      break;
    case 'body':
    default:
      variantClasses = 'text-base leading-relaxed';
      break;
  }

  // Trim to avoid trailing spaces gracefully
  const composedClassName = `${fontClass} ${variantClasses} ${className}`.trim();

  // Use createElement to avoid TS inferring an overly-narrow polymorphic component type.
  // This component is intentionally "polymorphic", so we keep typing permissive here.
  return React.createElement(
    Component as any,
    {
      className: composedClassName,
      style: customStyles,
      ...(props as any),
    },
    children,
  );
};

export default Text;
