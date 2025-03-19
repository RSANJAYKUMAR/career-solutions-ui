import React from "react";
import { Container, Typography, Card, CardMedia, CardContent, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const domains = [
  {
    name: "AutoMotives",
    image: "/assets/courses/Automotives.jpeg",
    description: "Learn embedded system programming and microcontroller architecture.",
    fullDescription: "Automotive refers to anything related to cars, trucks, or buses, including the industry that manufactures them. The term 'automotive' is derived from the Greek word autos (meaning 'self') and the Latin word motivus (meaning 'of motion'), signifying self-powered automation. In modern applications, the automotive domain goes beyond the Internet of Things (IoT) by integrating advanced wireless technologies such as Wi-Fi, 5G, Bluetooth, Zigbee, LoRa, and satellite communications across various fields."
  },
  {
    name: "Biometric",
    image: "/assets/courses/Biometric.jpeg",
    description: "Dive into AI, machine learning, and neural networks to build intelligent systems.",
    fullDescription: "Biometrics is the process of identifying a person by analyzing their physical or behavioral traits using electronic devices such as voice recognition, iris scans, or fingerprint analysis. It involves body measurements and calculations related to human characteristics and features. In computer science, biometric authentication (also known as realistic authentication) is used as a secure method of identification and access control."
  },
  {
    name: "Wireless sensor network",
    image: "/assets/courses/Wireless sensor network.jpeg",
    description: "Study celestial bodies, black holes, and cosmic phenomena shaping the universe.",
    fullDescription: "Wireless sensor networks (WSNs) are networks of spatially distributed sensors designed to monitor and record environmental conditions, such as temperature, sound, pollution levels, humidity, and wind. These sensors collect data and transmit it to a central location for processing and analysis."
  },
  {
    name: "Wireless protocols",
    image: "/assets/courses/Wireless protocols.jpeg",
    description: "Learn about automotive engineering, electric vehicles, and smart transportation.",
    fullDescription: "Wireless protocols are sets of rules and specifications that govern how devices communicate and exchange data over a wireless network. They define how information is transmitted, received, and processed. Depending on factors like frequency, bandwidth, and range, there are various types of wireless network protocols, with the most common being"


  },
  {
    name: "Can protocol",
    image: "/assets/courses/Can protocol.jpeg",
    description: "Discover biometric security, fingerprint recognition, and facial authentication.",
    fullDescription: "The Controller Area Network (CAN) protocol is a robust communication protocol that allows devices to communicate with each other without needing a host computer. It is commonly used in automotive and industrial applications where reliable and real-time data exchange is critical, employs a two-wire (twisted-pair) bidirectional serial bus communication method, which ensures noise immunity and efficient data transfer. It links electronic subsystems, enabling them to interact within a network, making it ideal for modern vehicles and embedded systems that require distributed control."


  },
  {
    name: "Data science",
    image: "/assets/courses/Data science.jpeg",
    description: "Understand ARM architecture, microprocessor design, and embedded systems.",
    fullDescription: "Data science is an interdisciplinary field that focuses on extracting meaningful insights and knowledge from data. It combines principles from mathematics, statistics, artificial intelligence, and computer science to analyze large volumes of structured and unstructured data. The primary goal of data science is to uncover patterns, trends, and relationships within data to make data-driven decisions. Techniques such as data mining, machine learning, data visualization, and predictive analytics are employed to gain valuable insights that can drive business strategies and innovations."


  },
  {
    name: "Artificial intelligence",
    image: "/assets/courses/Artificial intelligence.jpeg",
    description: "Work with Arduino hardware, IoT projects, and real-world automation.",
    fullDescription: "Artificial intelligence (AI) is the field of computer science that focuses on creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and decision-making.AI systems can analyze complex data, adapt to new information, and make informed decisions. From virtual assistants and chatbots to self-driving cars and medical diagnosis systems, AI is revolutionizing various industries and transforming how humans interact with technology."
  },
  {
    name: "Machine learning",
    image: "/assets/courses/Machine learning.jpeg",
    description: "Master 8051 microcontroller programming and embedded system design.",
    fullDescription: "Machine learning (ML) is a subset of artificial intelligence (AI) that enables computers to learn and improve from experience without being explicitly programmed. It uses algorithms and statistical models to analyze data, identify patterns, and make predictions or decisions.ML applications include image and speech recognition, fraud detection, recommendation systems, and predictive analytics. Through continuous training on large datasets, machine learning models become more accurate and efficient in performing their tasks."
  },
  {
    name: "Robotics",
    image: "/assets/courses/Robotics.jpeg",
    description: "Master 8051 microcontroller programming and embedded system design.",
    fullDescription: "Robotics is the science and technology of designing, building, and operating robots that can perform tasks automatically or semi-autonomously. Robots are programmable machines that can carry out complex series of actions and are often used to perform repetitive, hazardous, or precise tasks. Robotics applications range from industrial automation and medical surgery to space exploration and consumer products. Robots can be guided by external control devices or have embedded control systems, enabling them to operate independently in dynamic environments."
  },
  {
    name: "Astrophysics",
    image: "/assets/courses/Astrophysics.jpeg",
    description: "Master 8051 microcontroller programming and embedded system design.",
    fullDescription: "Astrophysics is the branch of astronomy that applies the principles of physics and chemistry to study celestial objects and cosmic phenomena. It aims to understand the physical nature of stars, planets, galaxies, and the overall structure and evolution of the universe. Astrophysicists analyze data from telescopes and space missions to investigate topics like black holes, neutron stars, cosmic radiation, and the fundamental forces shaping the cosmos. Through theoretical modeling and observational research, astrophysics seeks to answer fundamental questions about the origin and fate of the universe."

  },
];

const Domains = () => {
  const navigate = useNavigate();

  const handleDomainClick = (domain) => {
    navigate("/domain-details", { state: { domain: { ...domain, description: domain.fullDescription } } });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", background: "linear-gradient(to right, rgb(247, 251, 255), rgb(76, 205, 241))", padding: "40px 0" }}>

      <Container>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#007bff" }}>
          Domains
        </Typography>

        <Grid container spacing={3} justifyContent="center" style={{ marginTop: 20 }}>
          {domains.map((domain, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>

              <Card style={{ position: "relative", cursor: "pointer" }} onClick={() => handleDomainClick(domain)}>
                <div style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "0.9rem"
                }}>
                  View Details
                </div>
                <CardMedia component="img" height="200" image={domain.image} alt={domain.name} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{domain.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{domain.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Domains;