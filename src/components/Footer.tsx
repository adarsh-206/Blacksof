import ImageRow from "./ImageRow"
import CaseStudy from '../assets/caseStudy.png';
import ReverseCaseStudy from '../assets/reverseCaseStudy.png';

function Footer() {
    return (
        <>
            <ImageRow imageUrl={CaseStudy} numImages={9} opacity={40} middleImageUrl={ReverseCaseStudy} />
        </>
    )
}

export default Footer