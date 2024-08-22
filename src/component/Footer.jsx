import FeatureSection from "./FeatureSection"



const Footer = () => {
  return (
    <>
    <FeatureSection />
    <footer className="flex flex-col justify-center mt-2 w-full max-md:max-w-full">

      <div className="flex flex-col px-20 py-12 w-full bg-white border-t border-black border-opacity-20 max-md:px-5 max-md:max-w-full">

       
        <div className="shrink-0 mx-5 mt-14 max-w-full h-px border border-solid bg-zinc-300 border-zinc-300 w-full max-md:mt-10 max-md:mr-2.5" />

        <div className="mx-5 mt-10 text-base text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">

          2024 furino. All rights reverved

        </div>

      </div>

    </footer>
    </>
  )
}

export default Footer