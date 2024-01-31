import {StyleSheet, View, TextInput, Buttom, Button} from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enterText) {
        setEnteredGoalText(enterText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(""); // clear the input after adding the goal
    }

	rerturn(
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your course goal!"
				onChangeText={goalInputHandler}
                value={enteredGoalText}
			/>
			<Button
				title="ADD Goal"
				onPress={addGoalHandler}
			/>
		</View>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
		flex: 1, // takes up a quarter of the space
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%", // takes 80% of the avaliable space
		marginRight: 8,
		padding: 8, //
	},
});
