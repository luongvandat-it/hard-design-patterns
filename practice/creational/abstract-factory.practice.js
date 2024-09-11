/*
    Test 1: Easy Level
    Scenario: Simple Furniture Factory
    You need to create an Abstract Factory for producing different types of furniture, such as Chair and Sofa. Each type of furniture can be modern or Victorian. The factory should create the appropriate type of furniture based on the input.

    Task
    Create an abstract factory FurnitureFactory that returns both Chair and Sofa.
    Implement concrete factory classes ModernFurnitureFactory and VictorianFurnitureFactory.
    Each factory should produce both Chair and Sofa, with each type having different characteristics (e.g., ModernChair, VictorianChair, etc.).
    Test creating furniture from both modern and Victorian factories.
*/

class Chair {
    getInfo() {
        throw new Error('Should implement this function!')
    }
}

class ChairVictorian extends Chair {
    getInfo() {
        console.log(`Chair victorian`)
    }
}

class ChairModern extends Chair {
    getInfo() {
        console.log(`Chair modern`)
    }
}

class Sofa {
    getInfo() {
        throw new Error('Should implement this function!')
    }
}

class SofaVictorian extends Sofa {
    getInfo() {
        console.log(`Chair victorian`)
    }
}

class SofaModern extends Sofa {
    getInfo() {
        console.log(`Chair modern`)
    }
}

class FurnitureFactory {
    createChair() {
        throw new Error('Should implement this function!')
    }

    createSofa() {
        throw new Error('Should implement this function!')
    }
}

class ModernFactory {
    static createChair() {
        return new ChairModern()
    }

    static createSofa() {
        return new SofaModern()
    }
}

class VictorianFactory {
    static createChair() {
        return new ChairVictorian()
    }

    static createSofa() {
        return new SofaVictorian()
    }
}

const modernChair = ModernFactory.createChair()
// modernChair.getInfo()


/*
    Test 2: Medium Level
    Scenario: GUI Component Factory
    You need to create an Abstract Factory for generating GUI components (Button and Textbox) for two platforms: Windows and MacOS. Each platform has its specific look and behavior for these components. The factory should create the correct platform's components based on the input.

    Task
    Create abstract classes/interfaces for Button and Textbox.
    Implement concrete classes for WindowsButton, MacButton, WindowsTextbox, and MacTextbox.
    Create an abstract GUIFactory that returns both Button and Textbox.
    Implement concrete factories: WindowsFactory and MacFactory.
    Test creating both Windows and Mac components.
*/
class Button {
    click() {
        throw new Error('Should implement this function!')
    }
}

class ButtonWindow extends Button {
    click() {
        console.log('button window click')
    }
}

class ButtonMacbook extends Button {
    click() {
        console.log('button macbook click')
    }
}

class Textbox {
    type() {
        throw new Error('Should implement this function!')
    }
}

class TextboxWindow extends Textbox {
    type() {
        console.log('textbox window typing')
    }
}

class TextboxMacbook extends Textbox {
    type() {
        console.log('textbox macbook typing')
    }
}

class UIFactory {
    createButton() {
        throw new Error('Should implement this function!')
    }

    createTextbox() {
        throw new Error('Should implement this function!')
    }
}

class WindowFactory extends UIFactory {
    static createButton() {
        return new ButtonWindow()
    }

    static createTextbox() {
        return new TextboxWindow()
    }
}

class MacbookFactory extends UIFactory {
    static createButton() {
        return new ButtonMacbook()
    }

    static createTextbox() {
        return new TextboxWindow()
    }
}

const macbookButton = MacbookFactory.createButton()
const windowTextbox = WindowFactory.createTextbox()
macbookButton.click()
windowTextbox.type()

/*
    Test 3: Hard Level
    Scenario: Cloud Service Provider Factory
    You need to build an Abstract Factory for generating cloud infrastructure services for different providers like AWS and Azure. The services include VirtualMachine and StorageService. Each cloud provider has specific implementations of these services. The factory should provide the correct services based on the chosen cloud provider.

    Task
    Create abstract classes for VirtualMachine and StorageService.
    Implement concrete classes for AWSVirtualMachine, AzureVirtualMachine, AWSStorageService, and AzureStorageService.
    Create an abstract CloudServiceFactory that returns both VirtualMachine and StorageService.
    Implement concrete factories: AWSFactory and AzureFactory.
    Test creating services for both AWS and Azure
*/
// Hard: Abstract Product Interfaces
class VirtualMachine {
    start() {
        throw new Error('start() method must be implemented');
    }
}

class StorageService {
    upload() {
        throw new Error('upload() method must be implemented');
    }
}

// Hard: Concrete Products for AWS
class AWSVirtualMachine extends VirtualMachine {
    start() {
        return 'AWS Virtual Machine started';
    }
}

class AWSStorageService extends StorageService {
    upload() {
        return 'File uploaded to AWS Storage';
    }
}

// Hard: Concrete Products for Azure
class AzureVirtualMachine extends VirtualMachine {
    start() {
        return 'Azure Virtual Machine started';
    }
}

class AzureStorageService extends StorageService {
    upload() {
        return 'File uploaded to Azure Storage';
    }
}

// Hard: Abstract Factory
class CloudServiceFactory {
    createVirtualMachine() {
        throw new Error('createVirtualMachine() method must be implemented');
    }

    createStorageService() {
        throw new Error('createStorageService() method must be implemented');
    }
}

// Hard: Concrete Factories
class AWSFactory extends CloudServiceFactory {
    createVirtualMachine() {
        return new AWSVirtualMachine();
    }

    createStorageService() {
        return new AWSStorageService();
    }
}

class AzureFactory extends CloudServiceFactory {
    createVirtualMachine() {
        return new AzureVirtualMachine();
    }

    createStorageService() {
        return new AzureStorageService();
    }
}

// Test Code
const awsFactory = new AWSFactory();
const awsVM = awsFactory.createVirtualMachine();
const awsStorage = awsFactory.createStorageService();

console.log(awsVM.start());          // Output: 'AWS Virtual Machine started'
console.log(awsStorage.upload());    // Output: 'File uploaded to AWS Storage'

const azureFactory = new AzureFactory();
const azureVM = azureFactory.createVirtualMachine();
const azureStorage = azureFactory.createStorageService();

console.log(azureVM.start());        // Output: 'Azure Virtual Machine started'
console.log(azureStorage.upload());  // Output: 'File uploaded to Azure Storage'
