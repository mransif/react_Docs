import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const [data, setData] = useState([])
    const ref = useRef(null)

    useEffect(() => {
        setData([
            {
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
                fileSize: "6mb",
                close: false,
                tagDetails: {
                    isOpen: false,
                    tagTitle: "Downloading",
                    tagColor: 'green'
                },
            },
            {
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
                fileSize: "9mb",
                close: false,
                tagDetails: {
                    isOpen: false,
                    tagTitle: "Downloading",
                    tagColor: 'blue'
                },
            },
            {
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
                fileSize: "60mb",
                close: false,
                tagDetails: {
                    isOpen: false,
                    tagTitle: "Downloading",
                    tagColor: 'yellow'
                },
            },
        ])
    }, [])

    const toggleHandler = (index) => {
        setData(prevData =>
            prevData.map((item, i) =>
                i === index ? {
                    ...item, close: !item.close,
                    tagDetails: {
                        ...item.tagDetails,
                        isOpen: !item.tagDetails.isOpen
                    }
                }
                    : item
            )
        )

    }

    return (
        <div ref={ref} className="foreground p-5 fixed z-[3] w-full h-full flex gap-5 flex-wrap">
            {data.map((item, index) => (
                <Card key={index} data={item} refer={ref} toggle={() => { toggleHandler(index) }} />
            ))}
        </div>
    )
}

export default Foreground