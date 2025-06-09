import Plugins from './Plugins';
import WebProjects from './WebProjects';

const AboutPage = () => {
    return (
        <div className='flex flex-col'>
            <WebProjects />
            <div className='my-8' />

            <Plugins />
        </div>
    );
};

export default AboutPage;
