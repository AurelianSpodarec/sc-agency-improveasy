import Title from 'lib/src/components/typography/Title';
import Description from 'lib/src/components/typography/Description';

const Home: React.FC = (): JSX.Element => (
    <div id="home-page" className="page-padding">
        <Title>Home</Title>
        <Description>
            Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed
            magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus
            nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        </Description>
    </div>
);

export default Home;
