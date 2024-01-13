import java.io.FileReader;
import java.io.IOException;

public class readFile {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("D:\\example.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}
