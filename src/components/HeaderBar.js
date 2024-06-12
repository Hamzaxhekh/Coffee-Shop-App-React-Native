import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  SPACING,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
} from '../theme/theme';
import CustomIcon from './CustomICon';

const HeaderBar = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <View style={[styles.IconBG]}>
        <CustomIcon
          name="menu"
          color={COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_16}
        />
      </View>
      <Text style={styles.HeaderText}>{title}</Text>
      <View style={styles.ImageContainer}>
        <Image
          source={require('../assets/app_images/avatar.png')}
          style={styles.Image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default HeaderBar;
