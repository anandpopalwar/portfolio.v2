import FunkySVG from "../components/ui/FunkySVG";
import Text from "../components/ui/Text";

export const REVEAL_HEIGHT = 100;

const Footer = () => {
    return (
        <footer
            className="fixed bottom-0 left-0 w-full z-10 px-6 md:px-12 overflow-hidden flex flex-col justify-center pointer-events-none"
            style={{ height: `${REVEAL_HEIGHT}px` }}
        >
            <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
                {/* Avatar & Name */}
                <div className="flex flex-row items-center gap-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center p-2">
                        <FunkySVG />
                    </div>
                    <Text
                        variant="heading3"
                        as="span"
                        className="text-2xl sm:text-3xl font-black tracking-tighter text-neutral-50"
                    >
                        ANAND POPALWAR
                    </Text>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
