import Container from "../../components/Container"
import Image from "next/image"
import Link from "next/link"

export default function Post({ post }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-between">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Smart Grid Optimization
        </h1>
        <div className="mt-2 flex w-full flex-row items-center">
          <Image
            alt="Frans Zdyb"
            height={24}
            width={24}
            src="/fz.jpg"
            className="rounded-full"
            priority
          />
          <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">
            {"Frans Zdyb / 2021 - 2022"}
          </p>
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Developing electricity demand prediction and load balancing
            algorithms for smart grids in the US, Europe and Africa.
          </p>
          <p>
            Developed the software infrastructure for a US-based power grid
            sensor company as senior engineer and team lead. This involved
            developing a real-time learning algorithm for GLM, guiding embedded
            systems developers in implementing numerical algorithms for solving
            systems of linear equations, real-time outlier detection, data
            pre-processing and cleaning, setting up pipelines for automated data
            collection and analysis, continuous integration and deployment using
            GitLab, project management using Jira and setting up automated
            testing pipelines.
          </p>
        </div>

        <Link href="/cases">
          <a className="pt-8 text-sm font-light text-gray-400 dark:text-gray-500">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              back to cases
            </div>
          </a>
        </Link>

        <span className="h-16" />
      </div>
    </Container>
  )
}
