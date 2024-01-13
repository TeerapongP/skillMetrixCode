
import java.util.HashSet;
import java.util.Set;

public class set {
    public static void main(String[] args) {
        // Create a HashSet (Set implementation)
        Set<String> set = new HashSet<>();

        // Adding elements to the set
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple"); // Duplicate, will not be added

        // Displaying the elements of the set
        System.out.println("Set elements: " + set);

        // Checking if an element exists in the set
        System.out.println("Contains 'Banana': " + set.contains("Banana"));

        // Removing an element from the set
        set.remove("Banana");

        // Displaying the updated set
        System.out.println("Updated set elements: " + set);

        // Iterating through the set using a for-each loop
        System.out.print("Set elements (iteration): ");
        for (String item : set) {
            System.out.print(item + " ");
        }
        System.out.println();
    }
}
