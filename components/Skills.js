import Image from "next/dist/client/image";

const Skills = () => {
  return (
    <div className="flex justify-center">
      <div className="px-5">
        <Image src="/typescript.svg" width={30} height={30} alt="typescriptIcon" />
      </div>
      <div className="px-5">
        <Image src="/react.svg" width={30} height={30} alt="reactIcon" />
      </div>
      <div className="px-5">
        <Image src="/nextjs.svg" width={30} height={30} alt="nextjsIcon" />
      </div>
      <div className="px-5">
        <Image src="/firebase.svg" width={30} height={30} alt="firebaseIcon" />
      </div>
    </div>
  );
};

export default Skills;
