import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Card, Divider, IconButton } from 'react-native-paper';

const sampleCertificates = [
  { id: '1', title: 'Certificate 1', recipient: 'John Doe', verified: true },
  { id: '2', title: 'Certificate 2', recipient: 'Alice Smith', verified: true },
  { id: '3', title: 'Certificate 3', recipient: 'Bob Johnson', verified: false },
];

export default function IssuerDashboard() {
  const [certificates, setCertificates] = useState(sampleCertificates);
  const [newCertificateTitle, setNewCertificateTitle] = useState('');
  const [newRecipientName, setNewRecipientName] = useState('');

  const issueCertificate = () => {
    if (newCertificateTitle && newRecipientName) {
      const newCertificate = {
        id: (certificates.length + 1).toString(),
        title: newCertificateTitle,
        recipient: newRecipientName,
        verified: false,
      };

      setCertificates([...certificates, newCertificate]);
      setNewCertificateTitle('');
      setNewRecipientName('');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Welcome to the Issuer Dashboard
      </Text>

      <Card elevation={4} style={{ marginVertical: 8 }}>
        <Card.Content>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Issue Certificate</Text>
          <Divider style={{ marginVertical: 8 }} />

          <TextInput
            label="Certificate Title"
            placeholder="Enter certificate title"
            value={newCertificateTitle}
            onChangeText={(text) => setNewCertificateTitle(text)}
            style={{ marginBottom: 8 }}
          />
          <TextInput
            label="Recipient Name"
            placeholder="Enter recipient name"
            value={newRecipientName}
            onChangeText={(text) => setNewRecipientName(text)}
            style={{ marginBottom: 16 }}
          />

          <Button title="Issue Certificate" onPress={issueCertificate} />
        </Card.Content>
      </Card>

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>
        Your Issued Certificates:
      </Text>
      <FlatList
        data={certificates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card elevation={4} style={{ marginVertical: 8 }}>
            <Card.Content>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
              <Divider style={{ marginVertical: 8 }} />
              <Text>Recipient: {item.recipient}</Text>
              <Text>Verified: {item.verified ? 'Yes' : 'No'}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </ScrollView>
  );
}
