import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/mustafalanewala')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black p-6">
    <h1 className="text-4xl font-bold mb-6">GitHub Profile</h1>
    <div className="flex flex-col items-center bg-orange-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-48 h-48 rounded-full mb-4 object-cover transition-opacity duration-300 hover:opacity-80"
        />
        <p className="text-2xl font-semibold mb-2">Username: {data.login}</p>
        <p className="text-xl">Followers: {data.followers}</p>
    </div>
</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mustafalanewala')
    return response.json()
}