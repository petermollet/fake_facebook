import { data } from "autoprefixer"
import Image from "next/image"
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Post = ({name, message, timestamp, avatar ,postImage}) => {
    return (
        <div className="flex flex-col mt-5">

            <div className="p-5 bg-white rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2" >
                    <img className="rounded-full" src={avatar} height={40} width={40} alt=""/>
                    <div>
                        <p className="font-medium">
                            {name}
                        </p>
                        { timestamp ?
                        (
                            <p className="text-xs text-gray-400">
                                {new Date(timestamp?.toDate()).toLocaleString()}
                            </p>
                        ) : (
                            <p className="text-xs text-gray-400">
                                Loading
                            </p>
                        )}
                    </div>
                </div>
                <p className="pt-4">{message}</p>
            </div>

            {postImage && (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image src={postImage} objectFit="cover" layout="fill" />
                </div>
            )}

            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md
            text-gray-400 border-t">
                <div className="input-icon" title="Doesn't work :(">
                    <ThumbUpIcon className="h-4" />
                    <p className="text-xd sm:text-base" >Like</p>
                </div>
                <div className="input-icon" title="Doesn't work :(">
                    <ChatAltIcon className="h-4" />
                    <p className="text-xd sm:text-base" >Comment</p>
                </div>
                <div className="input-icon" title="Doesn't work :(">
                    <ShareIcon className="h-4" />
                    <p className="text-xd sm:text-base" >Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
