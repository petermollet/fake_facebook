
import Image from 'next/image'

const SidebarRow = ({title, Icon, src}) => {
    return ( 
        <div className="flex justify-center sm:justify-start items-center space-x-2 p-4
        hover:bg-gray-200 rounded-xl cursor-pointer" title={title}>
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                />
            )}
            {Icon && <Icon className="h-6 sm:h-8 rounded-full text-blue-500" />}
            <h1 className="hidden sm:inline-flex font-medium text-black">
                {title}
            </h1>
        </div>
     );
}
 
export default SidebarRow;