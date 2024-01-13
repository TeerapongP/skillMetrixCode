import java.io.File;
import java.io.IOException;

public class createFile {
    public static void main(String[] args) {
        try {
            File file = new File("D:\\example.txt");
            if (file.createNewFile()) {
                System.out.println("File created successfully.");
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }

}
