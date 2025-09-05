import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { AsmaName } from '@/types/asma';
import { X } from 'lucide-react-native';

interface NameDetailModalProps {
  name: AsmaName | null;
  visible: boolean;
  onClose: () => void;
}

export function NameDetailModal({ name, visible, onClose }: NameDetailModalProps) {
  if (!name) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color="#0D7377" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Beautiful Name Details</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Name Display */}
          <View style={styles.nameSection}>
            <Text style={styles.arabicName}>{name.arabic}</Text>
            <Text style={styles.transliteration}>{name.transliteration}</Text>
            <Text style={styles.meaning}>{name.meaning}</Text>
          </View>

          {/* Explanation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Explanation</Text>
            <Text style={styles.sectionContent}>{name.explanation}</Text>
          </View>

          {/* Du'a */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommended Du'a</Text>
            <View style={styles.duaContainer}>
              <Text style={styles.duaText}>{name.dua}</Text>
            </View>
          </View>

          {/* Spiritual Benefits */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Spiritual Benefits</Text>
            <Text style={styles.sectionContent}>
              Reciting this beautiful name brings spiritual connection, increases faith, and invites Allah's blessings. 
              Regular remembrance helps develop the divine quality represented by this name in one's character.
            </Text>
          </View>

          {/* When to Recite */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>When to Recite</Text>
            <Text style={styles.sectionContent}>
              This name can be recited at any time, but especially during prayer, morning/evening dhikr, 
              and when seeking the specific quality or blessing associated with this divine attribute.
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(13, 115, 119, 0.1)',
  },
  closeButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0D7377',
  },
  placeholder: {
    width: 34,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  nameSection: {
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 20,
  },
  arabicName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#0D7377',
    marginBottom: 10,
    textAlign: 'center',
  },
  transliteration: {
    fontSize: 24,
    color: '#2D3436',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  meaning: {
    fontSize: 18,
    color: '#F4A261',
    textAlign: 'center',
    fontWeight: '600',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0D7377',
    marginBottom: 12,
  },
  sectionContent: {
    fontSize: 16,
    color: '#2D3436',
    lineHeight: 24,
  },
  duaContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F4A261',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  duaText: {
    fontSize: 16,
    color: '#2D3436',
    lineHeight: 26,
    textAlign: 'right',
  },
});