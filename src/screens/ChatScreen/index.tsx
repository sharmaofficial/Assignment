import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { doctorReplies } from '../../utils/fakeResponses';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStyle } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Chat'>;

type Message = {
  id: string;
  text: string;
  from: 'user' | 'doctor';
  timestamp: number;
};

export default function ChatScreen({ route }: Props) {
  const { doctor } = route.params;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const flatRef = useRef<FlatList>(null);
  const STORAGE_KEY = `chat_${doctor.id}`;

  const {styles} = useStyle();
  // Load chat history
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        setMessages(JSON.parse(saved));
      } else {
        setMessages([
          {
            id: 'm0',
            text: `You are now connected with ${doctor.name}.`,
            from: 'doctor',
            timestamp: Date.now(),
          },
        ]);
      }
    })();
  }, [STORAGE_KEY, doctor.name]);

  // Save chat history whenever messages update
  useEffect(() => {
    if (messages.length) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
    flatRef.current?.scrollToEnd({ animated: true });
  }, [messages, STORAGE_KEY]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: `u_${Date.now()}`,
      text: input.trim(),
      from: 'user',
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    simulateDoctorReply();
  };

  const simulateDoctorReply = () => {
    const reply = doctorReplies[Math.floor(Math.random() * doctorReplies.length)];
    const delay = 1000 + Math.min(3000, reply.length * 30);

    setTyping(true);
    setTimeout(() => {
      const docMsg: Message = {
        id: `d_${Date.now()}`,
        text: reply,
        from: 'doctor',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, docMsg]);
      setTyping(false);
    }, delay);
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.from === 'user';
    return (
      <View style={[styles.msgRow, isUser ? styles.msgRowUser : styles.msgRowDoctor]}>
        <View style={[styles.msgBubble, isUser ? styles.bubbleUser : styles.bubbleDoctor]}>
          <Text style={isUser ? styles.textUser : styles.textDoctor}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <FlatList
        ref={flatRef}
        data={messages}
        keyExtractor={(m) => m.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatList}
      />

      {typing && (
        <View style={styles.typingRow}>
          <ActivityIndicator size="small" />
          <Text style={styles.typingText}>{doctor.name} is typing...</Text>
        </View>
      )}

      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
          style={styles.input}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
          placeholderTextColor={"#000"}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={{ color: 'white', fontWeight: '600' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
