import {StyleSheet, View, Text} from "react-native";

function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{props.text}</Text>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
		margin: 8,
		padding: 8,
		boarderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
	},
});
