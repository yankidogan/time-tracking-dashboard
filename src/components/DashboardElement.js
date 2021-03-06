import ellipsisIcon from '../images/icon-ellipsis.svg';
import exerciseIcon from '../images/icon-exercise.svg';
import playIcon from '../images/icon-play.svg';
import selfCareIcon from '../images/icon-self-care.svg';
import socialIcon from '../images/icon-social.svg';
import studyIcon from '../images/icon-study.svg';
import workIcon from '../images/icon-work.svg';

const DashboardElement = ({ elementData }) => {

    let iconToUse = workIcon;
    let classToUse = 'work-element';

    switch (elementData.title) {
        case 'Exercise':
            iconToUse = exerciseIcon
            classToUse = 'exercise-element'
            break;
        case 'Play':
            iconToUse = playIcon
            classToUse = 'play-element'
            break;
        case 'Self Care':
            iconToUse = selfCareIcon
            classToUse = 'self-care-element'
            break;
        case 'Social':
            iconToUse = socialIcon
            classToUse = 'social-element'
            break;
        case 'Study':
            iconToUse = studyIcon
            classToUse = 'study-element'
            break;
        default:
            iconToUse = workIcon;
            classToUse = 'work-element';
    }

    return (
        <div className={`element ${classToUse}`}>
            <div className="element-header">
                <img src={iconToUse} alt="" />
            </div>
            <div className="element-body">
                <div className="row1">
                    <div className="element-title">
                        <h1>{elementData.title}</h1>
                    </div>
                    <div className="element-options">
                        <img src={ellipsisIcon} alt="options icon" />
                    </div>
                </div>
                <div className="row2">
                    <div className="element-time">
                        <h2>{`${elementData.current}hrs`}</h2>
                    </div>
                    <div className="element-stats">
                        <p>{`${elementData.previous_text} - ${elementData.previous}hrs`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardElement;