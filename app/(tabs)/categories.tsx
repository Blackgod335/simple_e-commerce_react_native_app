import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/mockData';
import { router } from 'expo-router';

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Categories</Text>
          <Text style={styles.subtitle}>Browse products by category</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map(category => (
            <View key={category.id} style={styles.categoryWrapper}>
              <CategoryCard
                category={category}
                onPress={() => {
                  // Navigate to category products
                  router.push('/(tabs)/');
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryWrapper: {
    marginBottom: 20,
  },
});