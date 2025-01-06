import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function TopJobs() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching top 2 jobs
        const fetchTopJobs = async () => {
            const mockJobs = [
                {
                    id: 1,
                    name: "IBM",
                    logo: "../../brands/IBM-company-official-logo-partners.png",
                    title: "Software Developer Engineer",
                    salary:'200K-800K/yr',
                    
                },
                {
                    id: 2,
                    name: "HSBC CORP",
                    logo: "../../brands/hsbc-company-official-logo-partners.png",
                    desc:'',
                    title:'ML Trainee',
                    salary:'10-15K/month',
                },
            ];
            setJobs(mockJobs);
        };
        fetchTopJobs();
    }, []);

    const handleRedirectToJob = (job) =>{
        
        navigate(`/user/v1/organisation/query=${job}`);
       
    }

    return (
        <div className="div-main-top-job-section-home text-white flex flex-col items-center mt-6 pb-10">
            <div className="div-1-title">
                <h2 className="mb-8 text-4xl font-semibold text-center border-b-[2px] border-mainGreen pb-3">
                    Top Jobs Uploaded Today
                </h2>
            </div>
            <div className="div-top-jobs-section-content grid grid-col-2 grid-flow-col gap-4">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="div-job-1-flex flex items-center gap-4 bg-white text-black p-4 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center justify-center h-[85px] w-[120px]">
                            <img
                                src={job.logo}
                                alt={`${job.name} logo`}
                                className="h-[80px] w-[115px] object-contain"
                            />
                        </div>
                        <div className="div-job-content">
                            <h3 className="text-xl text-black/75 font-semibold">{job.name}</h3>
                            <span>{job.title}</span>
                            <p className="text-sm text-gray-400">
                                {job.salary}
                            </p>
                            <p className='text-xs text-gray-400 mt-4 hover:text-black hover:cursor-pointer' onClick={()=>{handleRedirectToJob(job.name)}}>
                                View more jobs at {job.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopJobs;
