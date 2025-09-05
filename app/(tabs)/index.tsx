import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { asmaUlHusna } from '@/data/asmaUlHusna';
import { AsmaName } from '@/types/asma';
import { ChatMessage, ChatInterface } from '@/components/ChatInterface';
import { NameDetailModal } from '@/components/NameDetailModal';
import { MessageCircle, X } from 'lucide-react-native';

export default function HomeScreen() {
  const [selectedName, setSelectedName] = useState<AsmaName | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'السلام عليكم! I am here to help you learn about the Beautiful Names of Allah. Ask me about any name, their meanings, or when to recite them.',
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const openNameDetails = (name: AsmaName) => {
    console.log('Opening details for:', name.transliteration);
    setSelectedName(name);
  };

  const closeNameDetails = () => {
    console.log('Closing name details');
    setSelectedName(null);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = (text: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const response = generateAllامResponse(text);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const generateAllامResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerMessage.includes('rahman') || lowerMessage.includes('الرحمن')) {
      return 'Ar-Rahman (الرحمن) means "The Most Merciful" - Allah\'s mercy that encompasses all creation. A beautiful du\'a is: "اللهم أنت الرحمن الرحيم، ارحمني برحمتك الواسعة" - "O Allah, You are Ar-Rahman, the Most Merciful, have mercy on me with Your vast mercy."';
    }
    
    if (lowerMessage.includes('sabur') || lowerMessage.includes('الصبور')) {
      return 'As-Sabur (الصبور) means "The Patient One" - Allah who does not rush to punish. Recite: "اللهم أنت الصبور، اجعلني من الصابرين" - "O Allah, You are As-Sabur, make me among the patient ones."';
    }
    
    if (lowerMessage.includes('guidance') || lowerMessage.includes('help')) {
      return 'For guidance, recite the names Al-Hadi (الهادي - The Guide) and Ar-Rashid (الرشيد - The Guide to Right Path). Du\'a: "اللهم اهدني فيمن هديت" - "O Allah, guide me among those You have guided."';
    }
    
    if (lowerMessage.includes('protection') || lowerMessage.includes('safety')) {
      return 'For protection, call upon Al-Hafiz (الحافظ - The Preserver) and Al-Muhaimin (المهيمن - The Guardian). Du\'a: "اللهم أنت الحافظ المهيمن، احفظني من كل سوء" - "O Allah, You are the Preserver and Guardian, protect me from all evil."';
    }
    
    if (lowerMessage.includes('forgiveness') || lowerMessage.includes('repentance')) {
      return 'Seek Al-Ghafur (الغفور - The Oft-Forgiving) and At-Tawwab (التواب - The Accepter of Repentance). Recite: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه" 70 times daily.';
    }
    
    return 'Each of Allah\'s 99 Beautiful Names carries profound meaning and spiritual power. Which specific name would you like to learn about? You can ask about their meanings, when to recite them, or request supplications using these names.';
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>أسماء الله الحسنى</Text>
        <Text style={styles.subtitle}>The 99 Beautiful Names of Allah</Text>
      </View>

      {/* Names Grid */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {asmaUlHusna.map((name, index) => (
            <TouchableOpacity
              key={index}
              style={styles.nameCard}
              onPress={() => openNameDetails(name)}
            >
              <Text style={styles.nameNumber}>{index + 1}</Text>
              <Text style={styles.nameArabic}>{name.arabic}</Text>
              <Text style={styles.nameEnglish}>{name.transliteration}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Chat Button */}
      <TouchableOpacity style={styles.chatButton} onPress={toggleChat}>
        <MessageCircle size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Name Detail Modal */}
      <NameDetailModal
        name={selectedName}
        visible={selectedName !== null}
        onClose={closeNameDetails}
      />

      {/* Chat Modal */}
      <ChatInterface
        visible={isChatOpen}
        onClose={toggleChat}
        messages={messages}
        onSendMessage={sendMessage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F0',
  },
  header: {
    backgroundColor: '#0D7377',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F4A261',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(248, 248, 240, 0.8)',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  nameCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: '#F4A261',
  },
  nameNumber: {
    fontSize: 12,
    color: '#0D7377',
    fontWeight: '600',
    marginBottom: 5,
  },
  nameArabic: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 5,
    textAlign: 'center',
  },
  nameEnglish: {
    fontSize: 12,
    color: '#636E72',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0D7377',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});