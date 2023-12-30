import { TypeAnimation } from "react-type-animation"
import { Navigation } from "./Navbar"
export const HomePages = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="mx-5 mt-5 ms-5 text-center gap-5 p-5 ps-4">
                <TypeAnimation
                    sequence={[
                        'Hi, my name is Muhammad Reza',
                        
                    ]}
                    wrapper="span"
                    speed={50}
                    className="font-bold text-blue-700"
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <div>
                </div>
                <span className="badge badge-lg">
                    <p className="text-xl">Backend | FrontEnd | Machine Learning | Data analyst</p>
                </span>
            </div>
        </>
    )
}