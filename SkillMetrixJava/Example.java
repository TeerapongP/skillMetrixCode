public class Example {
    // Variable declaration
    int num;
    String text;
    double doubleNum;
    float floatNum;
    boolean boolText;
    char charText;

    public static void main(String[] args) {
        // Creating an instance of the class
        Example exampleObj = new Example();

        // Accessing and modifying variables
        exampleObj.num = 42;
        exampleObj.text = "Hello, Java!";
        exampleObj.doubleNum = 3.14;
        exampleObj.floatNum = 1.23f;
        exampleObj.boolText = true;
        exampleObj.charText = 'A';

        // Printing the values
        System.out.println("Number: " + exampleObj.num);
        System.out.println("Text: " + exampleObj.text);
        System.out.println("doubleNum: " + exampleObj.doubleNum);
        System.out.println("float: " + exampleObj.floatNum);
        System.out.println("boolText: " + exampleObj.boolText);
        System.out.println("char: " + exampleObj.charText);
    }
}
