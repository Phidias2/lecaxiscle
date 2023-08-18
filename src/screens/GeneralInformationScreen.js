import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
const GeneralInformation = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
      image: 'https://www.bootdey.com/image/500x500/6495ED/000000'
    },
    {
      title: 'sed do eiusmod tempor incididunt ut labore et dolore',
      content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eiu',
      image: 'https://www.bootdey.com/image/500x500/008B8B/000000'
    },
    {
      title: 'Duis aute irure dolor in reprehenderit',
      content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      image: 'https://www.bootdey.com/image/500x500/FF00FF/000000'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.accordionContainer}>
        {sections.map((section, index) => (
          <View key={index}>
            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => setActiveSection(index)}
            >
              <Text style={styles.title}>{section.title}</Text>
            </TouchableOpacity>
            {activeSection === index && (
              <View style={styles.contentContainer}>
                <Text style={styles.content}>{section.content}</Text>
                <Image style={styles.sectionImage} source={{ uri: section.image }} />
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );

}
export default GeneralInformation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  accordionContainer: {
    margin: 10,
    marginTop: 60,
  },
  titleContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
  },
  sectionImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
});

