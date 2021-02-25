import styles from '../styles/Home.module.css'
import Title from '../components/Title'
export default function Home() {
  return (
    <>
    <Title title="Homepage" />
    <div className="w-full mx-auto bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
  <div className="block py-10">
    <div className="md:max-w-6xl mx-auto over-hidden">
      <div className="">
      <div className="justify-between text-center">
        <div className="text-5xl font-black text-white leading-tight">Custom Laravel, Node.js, React,<br />PHP Application Development Service</div>
        <p className="text-white text-xl">Laravel is an open source, PHP based web application framework. We provide<br />a fast development approach for developing high quality Laravel web applications</p>
      </div>
      </div>
    </div>
    </div>
  </div>

<div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

  <div className="font-medium leading-7 text-center space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:space-y-0">

    <div className="text-teal-900 bg-teal-200 py-3 px-6 rounded">
      <p>Hello, you! 👋</p>
    </div>

    <div className="text-purple-900 bg-purple-200 py-3 px-6 rounded">
      <p>Here is a 🎁</p>
    </div>

    <div className="text-green-900 bg-green-200 py-3 px-6 rounded">
      <p>Tailwind starter 🎉</p>
    </div>
  </div>
</div>


    <div className="mt-6">

      <button className="px-4 py-2 text-white bg-blue-500 rounded select-none no-outline focus:shadow-outline">Open Modal</button>

      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">

        
           <div className="h-auto p-4 mx-2 text-left bg-white rounded shadow-xl md:max-w-xl md:p-6 lg:p-8 md:mx-0">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Modal Title
            </h3>

            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-500">
                Adipisci quasi doloribus. Veniam veritatis dignissimos. Quis maiores ea. Et nulla sunt.
              </p>
          </div>
        </div>

          <div className="mt-5 sm:mt-6">
            <span className="flex w-full rounded-md shadow-sm">
              <button className="inline-flex justify-center w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                Close this modal!
              </button>
            </span>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}


