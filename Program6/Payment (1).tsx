import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-icons';

export default function PaymentScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Pembayaran</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.timer}>
            Selesaikan pemesanan dalam{' '}
            <Text style={{ color: 'red' }}>00:60:00</Text>
          </Text>

          {/* Transfer Bank */}
          <Text style={styles.sectionTitle}>Transfer Bank</Text>

          {renderBankRow('Bank Mandiri')}
          {renderBankRow('Bank BCA')}
          {renderBankRow('Bank BNI')}
          {renderBankRow('Bank Mega')}

          {/* Virtual Account */}
          <Text style={[styles.sectionTitle, { marginTop: 25 }]}>
            Virtual Account
          </Text>

          {renderBankRow('Virtual Account Mandiri')}
          {renderBankRow('Virtual Account BCA')}
          {renderBankRow('Virtual Account BNI')}
          {renderBankRow('Virtual Account Mega')}

          {/* Cicilan Tanpa Kartu Kredit */}
          <Text style={[styles.sectionTitle, { marginTop: 25 }]}>
            Cicilan Tanpa Kartu Kredit
          </Text>

          <TouchableOpacity style={styles.simpleCard}>
            <Text style={styles.simpleText}>Kredivo</Text>
            <MaterialIcons name="chevron-right" size={20} color="#7B1FA2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.simpleCard}>
            <Text style={styles.simpleText}>
              {'< 17 Tahun (S&K BERLAKU)'}
            </Text>
            <MaterialIcons name="chevron-right" size={20} color="#7B1FA2" />
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/* 🔥 Custom Bank Logo */
function CustomBankLogo() {
  return (
    <View style={styles.bankLogo}>
      <View style={styles.roof} />
      <View style={styles.body}>
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column} />
      </View>
      <View style={styles.base} />
    </View>
  );
}

/* 🔥 Bank Row */
function renderBankRow(title: string) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.leftRow}>
        <CustomBankLogo />
        <Text style={styles.bankText}>{title}</Text>
      </View>

      <View style={styles.arrowCircle}>
        <MaterialIcons name="chevron-right" size={20} color="#7B1FA2" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B1FA2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  timer: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  /* Bank Cards */
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankText: {
    marginLeft: 10,
    fontSize: 15,
  },

  /* Simple Cicilan Box */
  simpleCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  simpleText: {
    fontSize: 15,
  },

  /* Custom Bank Logo */
  bankLogo: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#7B1FA2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roof: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFFFFF',
    marginBottom: 2,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 18,
  },
  column: {
    width: 3,
    height: 10,
    backgroundColor: '#FFFFFF',
  },
  base: {
    width: 18,
    height: 3,
    backgroundColor: '#FFFFFF',
    marginTop: 2,
  },

  arrowCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#7B1FA2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
