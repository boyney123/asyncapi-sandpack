import { SandpackProvider, SandpackThemeProvider, SandpackCodeEditor, SandpackPreview, nightOwlTheme } from '@codesandbox/sandpack-react';
import rawFile from '../data/spec.yml';
import '@codesandbox/sandpack-react/dist/index.css';

const code = `

import { useEffect, useState } from "react";
import AsyncApiComponent from "@asyncapi/react-component";
import "@asyncapi/react-component/lib/styles/fiori.css";

import rawSpec from "!!raw-loader!./spec.yml"

export default function App() {
    return (
      <div className="h-5 w-full">
        <AsyncApiComponent schema={rawSpec} />
      </div>
    )
}`;

const Index = () => (
  <div className=" bg-gray-800 min-h-screen">
    <div className="bg-gradient-to-r from-gray-700 to-pink-600 h-4 mb-20"></div>
    <div className=" max-w-7xl mx-auto">
      <h2 className="text-4xl text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AsyncAPI: Sandpack Example</h2>

      <div className="text-white py-5">
        <p>
          Here is a demo of AsyncAPI using{' '}
          <a className="text-blue-400 underline" href="https://sandpack.codesandbox.io/">
            sandpack
          </a>{' '}
          to render the async-react component along side the code.
        </p>
        <p>
          These examples can be run an any web environment, and also you could run this next to the AsyncAPI docs like the Example in{' '}
          <a className="text-blue-400 underline" href="https://beta.reactjs.org/learn">
            React Docs
          </a>
        </p>
      </div>

      <div className="bg-red-500 px-1 py-1 rounded-xl w-full bg-gradient-to-r p-1 from-gray-700 via-gray-800 to-pink-600">
        <SandpackProvider
          template="react"
          customSetup={{
            files: {
              '/spec.yml': {
                code: `${rawFile}`,
                active: true,
              },
              '/App.js': {
                code,
                hidden: true,
              },
            },
            dependencies: {
              react: '17.0.2',
              'react-dom': '17.0.2',
              'react-scripts': '4.0.0',
              '@asyncapi/react-component': '0.24.19',
            },
          }}
        >
          <SandpackThemeProvider theme={nightOwlTheme}>
            <div className=" grid grid-cols-2 gap-2">
              <div className="max-h-24">
                <SandpackCodeEditor
                  showLineNumbers={true}
                  customStyle={{
                    height: 500,
                    maxHeight: 800,
                  }}
                />
              </div>
              <div>
                <SandpackPreview
                  showOpenInCodeSandbox={true}
                  showRefreshButton={true}
                  customStyle={{
                    height: 500,
                    maxHeight: 800,
                  }}
                />
              </div>
            </div>
          </SandpackThemeProvider>
        </SandpackProvider>
      </div>
    </div>
  </div>
);

export default Index;
