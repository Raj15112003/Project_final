import React from 'react'
import './Office.css'
import b1 from '../../Assets/images/1b.avif';
import b2 from '../../Assets/images/2b.avif';
import b3 from '../../Assets/images/3b.avif';
import b4 from '../../Assets/images/4b.avif';

const Offices = () => {
  return (
    <div className='offices'>
        
    <section id="page-header" class="blog-header">
        <h2>#ReadmeRefineme</h2>
        <p>Read all the case studies about our product</p>
    </section>

    <section id="blog">
        <div class="blog-box">
            <div class="box-img">
                <img src={b1} alt="" />
            </div>
            <div class="blog-details">
                <h4>Wool cashmere formal jacket</h4>
                <p> The show brought together aesthetics from distant eras and geographies and linked elements from the past with the present....</p>
                <a href="/offices">Continue Reading</a>
                <h1>26/11</h1>
            </div>
        </div>

        <div class="blog-box">
            <div class="box-img">
                <img src={b2} alt="" />
            </div>
            <div class="blog-details">
                <h4>GG waste bag holder</h4>
                <p> Each piece encompasses the joy and companionship that stems from the unique relationships between pets and people. A reimagination of the everyday...</p>
                <a href="/offices">Continue Reading</a>
                <h1>09/11</h1>
            </div>
        </div>

        <div class="blog-box">
            <div class="box-img">
                <img src={b3} alt="" />
            </div>
            <div class="blog-details">
                <h4>Gucci HA HA HA striped T-shirt</h4>
                <p> Gucci HA HA HA expresses the friendship between Gucci’s Creative Director, Alessandro Michele, and the British singer-songwriter and actor, Harry Styles...</p>
                <a href="/offices">Continue Reading</a>
                <h1>15/11</h1>
            </div>
        </div>

        <div class="blog-box">
            <div class="box-img">
                <img src={b4} alt="" />
            </div>
            <div class="blog-details">
                <h4>Gucci HA HA HA boot with buckles</h4>
                <p> The result of an inventive two-person journey between Gucci’s Creative Director, Alessandro Michele, and the British singer-songwriter and actor, Harry Styles. This leather boot features a red suede heart patch and buckle detailing....</p>
                <a href="/offices">Continue Reading</a>
                <h1>26/11</h1>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Offices