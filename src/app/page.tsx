
import PersonalOrBusinessTabs from "./screens/PersonalOrBusinessTab";
import InfoSection from "./screens/InfoSection";
import LoginSection from "./screens/LoginSection";

export default function Home() {
  return (
    <div className="mt-10 md:mt-52 ml-10 md:ml-40">
      <h1 className={`font-sans font-bold text-2xl md:text-5xl text-text_basic`}>Start your journey with</h1>
      <h1 className={`font-sans font-bold text-2xl md:text-5xl text-text_basic`}>Carecoins today</h1>
      <div className="flex flex-col md:flex-row  w-4/5">
        <div className=" flex-1 mt-10 h order-2">
          <InfoSection />
        </div>
        <div className="bg-white flex-1  md:order-2 order-1 ">
          <LoginSection />
        </div>
      </div>
      <div className="mt-44 mr-4">
        <PersonalOrBusinessTabs />
      </div>
    </div>
  );
}
