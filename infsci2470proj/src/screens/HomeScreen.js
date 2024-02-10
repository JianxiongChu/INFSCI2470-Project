import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  ScreenTitle,
  SectionTitle,
  SectionParagraph,
} from "../components/GenericTextLayout";

import yalini1 from '../../assets/health_timeline.png'
import yalini2 from '../../assets/health_hist.png'
import yalini3 from '../../assets/health3.png'
import yalini4 from '../../assets/health4.png'

const HomeScreen = () => {
  return (
    <ScrollView>
      <ScreenTitle titleText={"Welcome to your Smartwatches Health Dashboard!"} />
      <View style={styles.container}>
        <SectionTitle titleText={"About this homepage"} />
        <SectionParagraph
        paragraphContent={
          "\t   You can visualize your health data collected from smartwatches here! This can help you track and improve your health status. \n\
           You can click Details page at the bottom of the screen for more information!"
        }
      />
      </View>
      
      <View style={styles.container}>
        <SectionTitle titleText={"About this App"} />
        <SectionParagraph
        paragraphContent={
          "\t This app is developed on React framework and can be deployed on various platforms, such as web and mobile systems.\n\
          The project is the final project for INFSCI 2470 - Interactive System Design, Spring 2023. Professor Peter Brusilovsky and Yalini Senathirajah are the advisor for this project."
        }
        
      />
      </View>

      <View style={styles.container}>
        <SectionTitle titleText={"Additional info/Q & A"} />
        <SectionParagraph
        paragraphContent={
          "The developing team members are Haotian Wu, LuQian Chen, Jianxiong Chu, Zhuochun Li. If you have any questions, please feel free to report and contact us via email jic174@pitt.edu. Thank you!"
        }
      />
      </View>
      
      <img src={yalini1} height={600} width={900} style={{alignSelf: 'center', margin:'1%'}} />
      <img src={yalini2} height={600} width={900} style={{alignSelf: 'center', margin:'1%'}} />
      <img src={yalini3} height={600} width={900} style={{alignSelf: 'center', margin:'1%'}} />
      <img src={yalini4} height={600} width={900} style={{alignSelf: 'center', margin:'1%'}} />

    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "flex-start" },
});

export default HomeScreen;
