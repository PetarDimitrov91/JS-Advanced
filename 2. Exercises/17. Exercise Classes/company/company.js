class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department ||!salary || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({name, position, salary});
       return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let averageSalary = 0;
        let bestDepartmentEmployees = {}

        for (let department in this.departments) {
            let sumOfSalaries = 0;

            for (let employee in this.departments[department]) {
                sumOfSalaries += this.departments[department][employee].salary;
            }
            if (averageSalary < sumOfSalaries / department.length) {
                bestDepartment = department;
                averageSalary = sumOfSalaries / this.departments[department].length;
                bestDepartmentEmployees = this.departments[department];
            }
        }

        bestDepartmentEmployees.sort((a, b) => {
            let result = b.salary - a.salary;
            if (result === 0) {
                result = a.name.localeCompare(b.name);
            }
            return result;
        });

        let output = `Best Department is: ${bestDepartment}\nAverage salary: ${averageSalary.toFixed(2)}\n`;
        for (const dep in bestDepartmentEmployees) {
            output += `${bestDepartmentEmployees[dep].name} ${bestDepartmentEmployees[dep].salary} ${bestDepartmentEmployees[dep].position}\n`;
        }

        return output.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
