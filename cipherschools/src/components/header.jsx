import React from "react";

export default function Header({ name, email,followers }) {
  return (
    <div className="px-8 w-full h-28 bg-indigo-900 flex flex-row justify-start justify-between items-center text-white bg-[url('https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png')]">
      <div className="flex flex-row">
        <div className="w-16 h-16">
          <img src="/abc" className="rounded-full " />
        </div>
        <div className="flex-col ml-6">
          <h4 className="text-left text-lg">Hello,</h4>
          <h2 className="text-left text-xl font-bold">{name}</h2>
          <h5 className="text-left text-md">{email}</h5>
        </div>
      </div>  
        <p>{followers} followers</p>
    </div>
  );
}
