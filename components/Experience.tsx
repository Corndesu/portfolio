import { workExperience } from "@/data";
import { Card } from "./ui/Card";
import { Timeline } from "./ui/Timeline";

const Experience = () => {
    const data = workExperience.map((item) => ({
        title: item.year,
        content: (
          <div>
            <h1 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 md:text-xl mb-8">
              {item.title}
            </h1>
            {item.desc.map((item)=>{
            return(
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    {item}
                </p>
            )
            })}
          </div>
        ),
      }));

    return(
        <div className="py-20" id="experience">
            <h1 className="heading">
                My 
                <span className="text-purple"> Work Experience</span>
            </h1>
            <div className="w-full">
             <Timeline  data={data} />
            </div>
        </div>
    );
}

export default Experience;