import React from "react"

const Footer = () => {
    return (
        <footer className="bg-black shadow-md py-8 pb-8 pt-24">
            <div className="container mx-auto text-center text-gray-500">
                <div className="flex items-center justify-center">
                    <hr className="border-t border-gray-500 w-1/6" />
                    <div className="flex space-x-8 px-8">
                        <a href="https://linkedin.com/in/martin-lacsamana" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/linkedin.svg" alt="LinkedIn" className="w-6 h-7 brightness-75 hover:brightness-100 transition-all duration-300" />
                        </a>
                        <a href="mailto:martinlacsamana.dev@gmail.com">
                            <img src="/logos/gmail2.svg" alt="Gmail" className="w-8 h-8 brightness-75 hover:brightness-100 transition-all duration-300" />
                        </a>
                        <a href="https://github.com/Martinlacsamana" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/github.svg" alt="GitHub" className="w-7 h-8 brightness-80 hover:brightness-100 transition-all duration-300" />
                        </a>
                    </div>
                    <hr className="border-t border-gray-500 w-1/6" />
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} Martin Lacsamana. All rights reserved.</p>

                    <p className="text-sm mt-2 text-gray-500">
                    Built using NextJS & TypeScript. No templates were harmed in the making.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer