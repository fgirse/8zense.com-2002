import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/LogoEZ.png"
            alt="logo"
            width={56}
            height={56}
          />
        </Link>

        <div className=" copyright text-[1rem] font-medium text-center text-gray-600 :text-gray-400">
          Copyright © {new Date().getFullYear()}. All rights by{" "}
         {/*} <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener">
            Web3Templates.
              </a>{" "}*/}
           <span className=" font-phudu">MEDICUS DESIGN{" "}</span>
          <a
            href="https://www.glazestock.com/"
            target="_blank"
            rel="noopener ">
           4058 Basel🇨🇭
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer