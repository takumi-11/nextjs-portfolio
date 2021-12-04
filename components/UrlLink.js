import Image from "next/dist/client/image";

const UrlLink = () => {
    return (
      <div className="mt-6 flex justify-around">
        <div>
          <a href="https://twitter.com/iazo_zu">
            <Image
              className="hover:opacity-70"
              src="/twitter.svg"
              width={30}
              height={30}
              alt="twitterIcon"
            />
          </a>
        </div>
        <div>
          <a href="https://gitlab.com/takumi-11">
            <Image
              className="hover:opacity-70"
              src="/gitlab.svg"
              width={30}
              height={30}
              alt="gitlabIcon"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/takumi-11">
            <Image
              className="hover:opacity-60"
              src="/github.svg"
              width={30}
              height={30}
              alt="githubIcon"
            />
          </a>
        </div>
      </div>
    );
}

export default UrlLink
