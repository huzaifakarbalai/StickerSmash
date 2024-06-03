import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
    placeholder: ImageSourcePropType;
    selectedImage: string | null;
}

export default function ImageViewer({ placeholder, selectedImage }: ImageViewerProps) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholder;
    return (
        <Image source={imageSource} style={styles.image} />
    );
}


const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
