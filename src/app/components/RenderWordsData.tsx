import { Definition, Meaning, WordData } from "@/types/dictionary";

interface WordDetailsProps {
    data: WordData;
}

const RenderWordsData: React.FC<WordDetailsProps> = ({ data }) => {
    return (
        <div className="space-y-4 font-sans">
            <div>
                <h3 className="text-lg font-semibold font-sans">Word:</h3>
                <p className="text-xl font-semibold font-sans">
                    {data.word} ({data.phonetic})
                </p>
            </div>

            <div>
                <h3 className="text-lg font-semibold font-sans">Meanings:</h3>
                {data.meanings?.map((meaning: Meaning, index: number) => (
                    <div key={index} className="mt-2">
                        <p className="italic text-text_basic font-sans">{meaning.partOfSpeech}</p>
                        {meaning.definitions?.map((definition: Definition, idx: number) => (
                            <div key={idx} className="ml-4 mt-1">
                                <p className="text-text_basic font-sans">- {definition.definition}</p>
                                {definition.example && (
                                    <p className="text-text_basic ml-4 font-sans">
                                        Example: {definition.example}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {data.meanings?.some((meaning: Meaning) => meaning.synonyms?.length > 0) && (
                <div>
                    <h3 className="text-lg font-semibold font-sans">Synonyms:</h3>
                    <ul className="list-disc list-inside text-text_basic font-sans">
                        {data.meanings?.flatMap((meaning: Meaning) => meaning.synonyms || []).map(
                            (synonym: string, index: number) => (
                                <li key={index} className="font-sans">{synonym}</li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RenderWordsData;
