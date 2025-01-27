"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { JSX, useEffect, useState } from "react";
import fetchWordData from "@/apis/fetchWord";
import RenderWordsData from "../components/RenderWordsData";
import { WordData } from "@/types/dictionary";

export default function PersonalOrBusinessTabs() {
    const [wordData, setWordData] = useState<WordData[]>([]);
    const [content, setContent] = useState<JSX.Element | string>("Loading...");

    const getWordInfo = async (word: string) => {
        try {
            const data = await fetchWordData(word);
            return data || [];
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWordInfo("development");
            setWordData(data);
            if (data.length > 0) {
                setContent(<RenderWordsData data={data[0]} />);
            }
        };
        fetchData();
    }, []);

    const handleTabSelect = (index: number) => {
        if (index === 0 && wordData.length > 0) {
            setContent(<RenderWordsData data={wordData[0]} />);
        } else if (index === 1) {
            getWordInfo('Software').then((data) => {
                setContent(<RenderWordsData data={data[0]} />);
            })
        }
    };

    return (
        <Tabs onSelect={handleTabSelect}>
            <TabList className="flex space-x-4 mb-4">
                <Tab
                    className="px-6 py-2 rounded-lg focus:outline-none hover:bg-orange-500 hover:text-white"
                    selectedClassName="bg-orange-500 text-white"
                >
                    Personal
                </Tab>
                <Tab
                    className="px-6 py-2 rounded-lg focus:outline-none hover:bg-orange-500 hover:text-white"
                    selectedClassName="bg-orange-500 text-white"
                >
                    Business
                </Tab>
            </TabList>

            <TabPanel>
                <div className="p-4 border md:w-4/12 border-gray-300 rounded-lg">{content}</div>
            </TabPanel>

            <TabPanel>
                <div className="p-4 border md:w-4/12 border-gray-300 rounded-lg">{content}</div>
            </TabPanel>
        </Tabs>
    );
}
