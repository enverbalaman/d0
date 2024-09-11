import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Countter = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const counterData = [
        {
            id: 1,
            counter: <CountUp start={0} end={15} duration={2} delay={0}></CountUp>,
            label: "+",
            title: "TECRÜBEMİZ",
        },
        {
            id: 2,
            counter: <CountUp start={0} end={10} duration={2} delay={0}></CountUp>,
            label: "+",
            title: "SİBER GÜVENLİK UZMANLARIMIZ",
        },
        {
            id: 3,
            counter: <CountUp start={0} end={100} duration={2} delay={0}></CountUp>,
            label: "%",
            title: "BAŞARI ORANIMIZ",
        },
        
    ];
    return (

        <div ref={ref} className="counter-area pb-75 style-2">
            <div className="container">
                <div className="row justify-content-center" data-cues="fadeIn">
                    {counterData.map(({ counter, id, title, label }) => (
                        <div key={id} className="col-lg-3 col-sm-6">
                            <div className="single-counter-card style-2">

                                {inView && <h2><span className="counter">{counter}</span> <span>{label}</span> </h2>}

                                <p>{title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Countter