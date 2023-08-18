import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const MentionLegale = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Mention legale',
      content: "LECAXISLE est une société immatriculée au Registre Du Commerce et des Sociétés sous le numéro RB/PKO/22 A 13975 en République du Bénin et dont le siège social est à Parakou, Quartier Ladji-Farani. Le Directeur de la publication ONOUNDA Logo- Oluwa Blaise Le Site internet a fait l'objet d'une déclaration à l’APDP, conformément à la loi n° 2017 - 20 du 20 avril 2018 portant code du numérique en République du Bénin(Livre 5ème relatif à la protection des données personnelles et de la vie privée), sous le numéro de récépissé(en cours). LECAXISCLE détient l'intégralité des droits de propriété intellectuelle relatifs aux éléments et aux contenu du site lecaxiscle.com. Pour cette raison, toute utilisation de quelque nature que ce soit et/ou toute reproduction de tout ou partie d'un élément du site lecaxiscle.com constitueraient une contrefaçon. Le site et les services web https://lecaxiscle.com/ sont hébergés par la société : MOCHAHOST Basé aux États - Unis site web: https://mochahost.com/fr Pour toute autres informations contactez - nous contact@lecaxiscle.com"
      },

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
              {/* <Image style={styles.sectionImage} source={{uri:section.image}} /> */}
            </View>
          )}
        </View>
      ))}
    </View>
  </ScrollView>
);

}

export default MentionLegale

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

