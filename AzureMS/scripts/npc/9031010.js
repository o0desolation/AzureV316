a


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ����

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/


var status = -1;
importPackage(Packages.client);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        if (cm.getProfession(1) != MapleProfessionType.HERBALISM.getValue()) {
            cm.getPlayer().message(5, "��������� ����ä���� �ƴϹǷ� �� �� �����ϴ�.");
            cm.dispose();
            return;
        }
        cm.openUI(42);
        cm.dispose();
    }
}

