import React from 'react'
import Footer from '../Home/Footer'
import ImageSlider from '../Home/ImageSlider'
import NewsEvents from '../Home/NewsEvents'
import StudentsTestmony from '../Home/StudentsTestmony'

export default function Home() {
    return (
        <>
            <ImageSlider />
            <StudentsTestmony />
            <NewsEvents />
            <Footer />
        </>
    )
}
