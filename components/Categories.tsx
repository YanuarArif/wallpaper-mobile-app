import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { data } from "@/constants/data";
import { dh, dw } from "@/utils/alatbantu";
import { theme } from "@/constants/theme";
import Animated, { FadeInRight } from "react-native-reanimated";

interface CategoriesProps {
  activeCategory: string | null;
  handleCategory: () => void;
}
interface CategoryItemProps {
  title: string;
  index: number;
  isActive: string;
  handleCategory: () => void;
}

const Categories = ({ activeCategory, handleCategory }: CategoriesProps) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem
          title={item}
          index={index}
          isActive={activeCategory == item}
          handleCategory={handleCategory}
        />
      )}
    />
  );
};

const CategoryItem = ({
  title,
  index,
  isActive,
  handleCategory,
}: CategoryItemProps) => {
  let color = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  let backgroundColor = isActive
    ? theme.colors.neutral(0.8)
    : theme.colors.white;

  return (
    <Animated.View
      entering={FadeInRight.delay(index * 100)
        .duration(1000)
        .springify()
        .damping(14)}>
      <Pressable
        onPress={() => handleCategory(isActive ? null : title)}
        style={[styles.category, { backgroundColor }]}>
        <Text style={[styles.title, { color }]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: dw(4),
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    backgroundColor: "white",
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  },
  title: {
    fontSize: dh(1.8),
    fontWeight: "normal",
  },
});

export default Categories;
