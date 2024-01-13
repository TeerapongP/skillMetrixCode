import java.io.FileWriter;
import java.io.IOException;

public class writeFile {
    public static void main(String[] args) {

        try (FileWriter writer = new FileWriter("D:\\example.txt")) {
            writer.write("TEST WRITE FILE");
            System.out.println("Data written to the file.");
        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}
