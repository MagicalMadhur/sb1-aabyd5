import React, { useState } from 'react';
import { Briefcase, Search } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  description: string;
}

const JobSeekerDashboard: React.FC = () => {
  const [jobs] = useState<Job[]>([
    { id: 1, title: 'Software Engineer', description: 'We are looking for a skilled software engineer...' },
    { id: 2, title: 'Product Manager', description: 'Seeking an experienced product manager to lead our team...' },
  ]);

  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);

  const handleApply = (jobId: number) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Briefcase className="mr-2" />
        Job Seeker Dashboard
      </h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <Search className="mr-2" />
          Available Jobs
        </h2>
        {jobs.length === 0 ? (
          <p>No jobs available at the moment.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="border p-4 rounded">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="mb-2">{job.description}</p>
                {appliedJobs.includes(job.id) ? (
                  <span className="text-green-600 font-semibold">Applied</span>
                ) : (
                  <button
                    onClick={() => handleApply(job.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Apply
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobSeekerDashboard;