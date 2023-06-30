interface RectangleProps {
    index: number;
    color: string;
}

function Rectangle({ index, color }: RectangleProps) {
    return (
        <li
        id={`character-rect-${index}`}
        key={"character-rect-key-" + index}
        className="w-1 h-1 xl:w-1.5 xl:h-1.5"
        style={{
            backgroundColor: color
        }}
        />
    );
}

const githubUsernameMaxCharacterAmount = 39;

interface CharacterCounterProps {
    characterCount: number;
}

function CharacterCounter({ characterCount }: CharacterCounterProps) {
    const rectangleArray = [];

    for (let i = 1; i <= 39; i++) {
        let color = "#838d9c";
        if (characterCount >= i) {
            color = "#92ff7a"
        }
        if (characterCount > githubUsernameMaxCharacterAmount) {
            color = "#ff7a7a";
        }

        rectangleArray.push(
            <Rectangle
            color={color}
            index={i}
            />
        );
    }

    return (
        <ol
        className="flex flex-wrap gap-1"
        >
            {rectangleArray}
        </ol>
    );
}
export default CharacterCounter;