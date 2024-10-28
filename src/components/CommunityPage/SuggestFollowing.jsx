import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';

const SuggestFollowing = ({ userData, refetch }) => {
    const [ showFollower , setShowFollower ] = useState(3);
    const { data: session } = useSession();
    
    return (
        <div className="mb-20">
            <h2 className="text-lg font-bold">Suggest</h2>
            <div className="mt-1">
                {[1,2,].length > 0 ? (
                    [1221].slice(0, showFollower).map(follower => (
                        <div key={follower._id} className="p-3 border mb-1 rounded">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-x-2">
                                    <div className="rounded-full h-11 w-11 border p-[2px]">
                                        <Image src={follower?.image} height={40} width={40} alt={follower?.name} className='rounded-full h-full w-full' />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold">{follower.name}</p>
                                    </div>
                                </div>
                                <button title='Follow User' onClick={() => handleFollow(follower?._id)} className="text-blue-500">Follow</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>You have no followers.</p>
                )}
                {
                    // Show the "See more" or "See less" options only if the length of filteredUsersWithoutYou is more than 3
                    [].length > 3 && (
                        showFollower === 3 ? (
                            <p onClick={() => {setShowFollower(showFollower + 3)}} className='text-gray-600 mt-1 hover:text-blue-500 duration-300 cursor-pointer'>See more</p>
                        ) : (
                            <p onClick={() => {setShowFollower(showFollower - 3)}} className='text-gray-600 mt-1 hover:text-blue-500 duration-300 cursor-pointer'>See less</p>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default SuggestFollowing;